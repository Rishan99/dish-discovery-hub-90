import { useState } from "react";
import { SearchInput } from "@/components/ui/search-input";
import { RestaurantCard } from "@/components/restaurant-card";
import { Button } from "@/components/ui/button";
import { mockRestaurants, Restaurant } from "@/data/mock-restaurants";
import { ChevronDown, ChevronUp } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Restaurant[]>([]);
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllNearest, setShowAllNearest] = useState(false);
  const [showAllSearch, setShowAllSearch] = useState(false);

  const INITIAL_DISPLAY_COUNT = 6;

  const featuredRestaurants = mockRestaurants.slice(0, 8); // More restaurants for demo
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

  const renderShowMoreButton = (
    isExpanded: boolean,
    toggleExpanded: () => void,
    totalCount: number,
    visibleCount: number
  ) => {
    if (totalCount <= INITIAL_DISPLAY_COUNT) return null;

    return (
      <div className="flex justify-center mt-12">
        <Button
          onClick={toggleExpanded}
          variant="outline"
          size="lg"
          className="group px-8 py-3 rounded-full border-2 border-primary/20 hover:border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              Show More ({totalCount - visibleCount} more)
            </>
          )}
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => console.log('Navigate to admin')}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent"
        >
          Admin
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-[700px] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white animate-fade-in">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Find Your Next 
                <span className="block text-white">
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
                  className="bg-white/90 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/70 border-0 shadow-lg"
                />
              </div>

              {/* Quick search suggestions */}
              <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up">
                {["Pizza", "Sushi", "Burgers", "Healthy"].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSearch(suggestion)}
                    className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/30 transition-all duration-200"
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
            {featuredRestaurants
              .slice(0, showAllFeatured ? featuredRestaurants.length : INITIAL_DISPLAY_COUNT)
              .map((restaurant, index) => (
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

          {renderShowMoreButton(
            showAllFeatured,
            () => setShowAllFeatured(!showAllFeatured),
            featuredRestaurants.length,
            showAllFeatured ? featuredRestaurants.length : Math.min(INITIAL_DISPLAY_COUNT, featuredRestaurants.length)
          )}
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
              {searchResults
                .slice(0, showAllSearch ? searchResults.length : INITIAL_DISPLAY_COUNT)
                .map((restaurant, index) => (
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

            {renderShowMoreButton(
              showAllSearch,
              () => setShowAllSearch(!showAllSearch),
              searchResults.length,
              showAllSearch ? searchResults.length : Math.min(INITIAL_DISPLAY_COUNT, searchResults.length)
            )}
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
            {nearestRestaurants
              .slice(0, showAllNearest ? nearestRestaurants.length : INITIAL_DISPLAY_COUNT)
              .map((restaurant, index) => (
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

          {renderShowMoreButton(
            showAllNearest,
            () => setShowAllNearest(!showAllNearest),
            nearestRestaurants.length,
            showAllNearest ? nearestRestaurants.length : Math.min(INITIAL_DISPLAY_COUNT, nearestRestaurants.length)
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
