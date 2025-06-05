import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Globe, 
  Users, 
  Lightbulb,
  Trophy,
  Rocket
} from 'lucide-react';
import { Link } from 'wouter';

export function AboutPage() {
  const features = [
    {
      icon: Code,
      title: "100% Frontend-Based",
      description: "Built entirely with HTML, CSS, and JavaScript - no servers required"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with smooth animations and responsive design"
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "Designed with passion for users who expect more from their shopping experience"
    },
    {
      icon: Globe,
      title: "Future-Ready",
      description: "Modern architecture that scales with growing business needs"
    }
  ];

  const achievements = [
    { icon: Trophy, label: "Full Stack Developer", color: "text-yellow-500" },
    { icon: Rocket, label: "Future Entrepreneur", color: "text-blue-500" },
    { icon: Lightbulb, label: "Visionary", color: "text-purple-500" },
    { icon: Target, label: "Future Millionaire", color: "text-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              ZUBI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              ZU Business Industries
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 animate-slide-up">
              The E-commerce Hub of the Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              ZUBI is not just an online store — it's a digital revolution in the world of eCommerce. 
              We're committed to redefining how people shop online by combining innovation, simplicity, 
              and top-notch user experience.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                    <Users className="h-8 w-8 text-primary mr-3" />
                    About the Founder
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Meet <span className="font-bold text-primary">Zia Uddin</span>, the founder and driving 
                      force behind ZUBI. A passionate and skilled Full Stack Web Developer, Zia is on a mission 
                      to create future-ready digital experiences.
                    </p>
                    <p className="leading-relaxed">
                      With strong command over frontend and backend technologies, Zia has built ZUBI completely 
                      from scratch — powered entirely by HTML, CSS, and JavaScript. But that's just the beginning.
                    </p>
                    <p className="leading-relaxed">
                      Zia isn't just a developer. He believes in building not just websites, but empires — 
                      with code, creativity, and courage.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-0">
                        <achievement.icon className={`h-8 w-8 mx-auto mb-2 ${achievement.color}`} />
                        <p className="font-semibold text-sm text-foreground">{achievement.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-slide-up hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To build a world-class, fast, secure, and modern online shopping platform using only 
                  frontend technologies — proving that great ideas don't need servers, they need vision.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-up hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To grow ZUBI into a globally recognized eCommerce ecosystem and inspire a new generation 
                  of developers and entrepreneurs to create, launch, and lead — starting from nothing but 
                  a dream and a browser.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why ZUBI */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why ZUBI?</h3>
            <p className="text-lg text-muted-foreground">What sets us apart from the competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="animate-slide-up hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">Want to Collaborate?</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're always open to feedback, collaborations, and creative partnerships. 
                ZUBI isn't just a business — it's a movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="transform transition-all duration-200 hover:scale-105">
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button variant="outline" size="lg" className="transform transition-all duration-200 hover:scale-105">
                    Explore Our Store
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="animate-fade-in bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
            <CardContent className="p-8">
              <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-6 italic">
                "Great ideas don't need servers, they need vision."
              </blockquote>
              <p className="text-muted-foreground font-medium">— Zia Uddin, Founder of ZUBI</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}