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
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up shine border-0">
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating rating badge */}
        <div className="absolute top-4 right-4 glass rounded-2xl px-3 py-2 flex items-center gap-1.5 floating">
          <Star className="h-4 w-4 fill-accent-gold text-accent-gold" />
          <span className="text-sm font-semibold text-foreground">{restaurant.rating}</span>
        </div>

        {/* Delivery time badge */}
        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-primary-foreground">
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
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105",
                index === 0 && "bg-gradient-hero text-white shadow-hero",
                index === 1 && "bg-gradient-accent text-white",
                index >= 2 && "bg-secondary/80 text-secondary-foreground hover:bg-secondary"
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
                  "group/menu w-full text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-transparent",
                  "bg-gradient-to-r from-background to-background/50 hover:from-primary/5 hover:to-primary/10",
                  "hover:border-primary/20 hover:shadow-card"
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