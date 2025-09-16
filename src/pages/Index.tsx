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
          className="h-[700px] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce-subtle" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-gold/20 rounded-full blur-2xl animate-pulse" />
          
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white animate-fade-in">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Find Your Next 
                <span className="block text-gradient bg-gradient-to-r from-white via-accent-gold to-white bg-clip-text text-transparent">
                  Favorite Meal
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-white/90 font-light leading-relaxed">
                Discover amazing restaurants. Search by name, cuisine, or even specific dishes!
              </p>
              
              <div className="max-w-2xl animate-slide-up">
                <SearchInput
                  placeholder="Search restaurants, cuisines, or dishes..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="glass text-foreground placeholder:text-muted-foreground/70 shadow-hero border-0"
                />
              </div>

              {/* Quick search suggestions */}
              <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up">
                {["Pizza", "Sushi", "Burgers", "Healthy"].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSearch(suggestion)}
                    className="px-4 py-2 rounded-full glass text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 space-y-24">
        {/* Featured Restaurants */}
        <section className="animate-fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Handpicked</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Restaurants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Handpicked favorites from our community of food lovers, curated for exceptional taste and quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <RestaurantCard
                  restaurant={restaurant}
                  onMenuClick={handleMenuClick}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <section className="animate-slide-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Search Results</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
              </div>
              
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Perfect Matches
              </h2>
              <p className="text-lg text-muted-foreground">
                Found <span className="font-semibold text-primary">{searchResults.length}</span> restaurants matching 
                <span className="font-semibold text-primary"> "{searchQuery}"</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((restaurant, index) => (
                <div 
                  key={restaurant.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <RestaurantCard
                    restaurant={restaurant}
                    onMenuClick={handleMenuClick}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Nearest Restaurants */}
        <section className="animate-fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Nearby</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nearest Restaurants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Quick bites and delicious meals close to your location for when you need something fast
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearestRestaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <RestaurantCard
                  restaurant={restaurant}
                  onMenuClick={handleMenuClick}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
