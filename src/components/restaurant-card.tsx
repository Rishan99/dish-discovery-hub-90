import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 animate-scale-in">
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{restaurant.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span>{restaurant.location}</span>
              <Clock className="h-4 w-4 ml-2" />
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {restaurant.cuisines.map((cuisine) => (
              <Badge key={cuisine} variant="secondary" className="text-xs">
                {cuisine}
              </Badge>
            ))}
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-2">Available Menus:</p>
            <div className="flex flex-wrap gap-2">
              {restaurant.menus.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => onMenuClick?.(menu.id)}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {menu.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}