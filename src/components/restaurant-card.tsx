import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Menu {
  id: string;
  name: string;
  type: string;
}

interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisines: string[];
  location: string;
  rating: number;
  deliveryTime: string;
  menus: Menu[];
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  onMenuClick?: (menuId: string) => void;
}

export function RestaurantCard({ restaurant, onMenuClick }: RestaurantCardProps) {
  return (
    <Card className="group overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up border border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Rating badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-foreground">{restaurant.rating}</span>
        </div>

        {/* Delivery time badge */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-medium text-white">
          {restaurant.deliveryTime}
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-playfair font-semibold text-xl text-foreground group-hover:text-gradient transition-all duration-300">
            {restaurant.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">{restaurant.location}</span>
          </div>
        </div>

        {/* Cuisine tags */}
        <div className="flex flex-wrap gap-2">
          {restaurant.cuisines.map((cuisine, index) => (
            <div
              key={cuisine}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                index === 0 && "bg-primary text-primary-foreground",
                index >= 1 && "bg-secondary text-secondary-foreground"
              )}
            >
              {cuisine}
            </div>
          ))}
        </div>

        {/* Menu section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <p className="text-sm font-playfair font-medium text-foreground px-3">Available Menus</p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            {restaurant.menus.map((menu, index) => (
              <button
                key={menu.id}
                onClick={() => onMenuClick?.(menu.id)}
                className={cn(
                  "group/menu w-full text-left px-4 py-3 rounded-lg transition-all duration-200 border border-border/50",
                  "bg-background hover:bg-muted hover:border-border"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground group-hover/menu:text-primary transition-colors">
                    {menu.name}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary/60 group-hover/menu:bg-primary transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}