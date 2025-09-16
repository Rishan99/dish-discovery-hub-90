import { useState } from "react";
import { SearchInput } from "@/components/ui/search-input";
import { RestaurantCard } from "@/components/restaurant-card";
import { mockRestaurants, Restaurant } from "@/data/mock-restaurants";
import heroImage from "@/assets/hero-food.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Restaurant[]>([]);

  const featuredRestaurants = mockRestaurants.slice(0, 3);
  const nearestRestaurants = mockRestaurants.slice(3);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = mockRestaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
          restaurant.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(query.toLowerCase())
          ) ||
          restaurant.menus.some((menu) =>
            menu.name.toLowerCase().includes(query.toLowerCase())
          )
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleMenuClick = (menuId: string) => {
    console.log(`Navigate to menu: ${menuId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Find Your Next Favorite Meal
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Discover amazing restaurants. Search by name, cuisine, or even specific dishes!
              </p>
              
              <div className="max-w-lg">
                <SearchInput
                  placeholder="Search restaurants, cuisines, or dishes..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="bg-white/95 backdrop-blur-sm border-white/20 text-foreground placeholder:text-muted-foreground shadow-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Featured Restaurants */}
        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Restaurants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked favorites from our community of food lovers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onMenuClick={handleMenuClick}
              />
            ))}
          </div>
        </section>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <section className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Search Results
              </h2>
              <p className="text-lg text-muted-foreground">
                Found {searchResults.length} restaurants matching "{searchQuery}"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  onMenuClick={handleMenuClick}
                />
              ))}
            </div>
          </section>
        )}

        {/* Nearest Restaurants */}
        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nearest Restaurants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick bites and delicious meals close to your location
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearestRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onMenuClick={handleMenuClick}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
