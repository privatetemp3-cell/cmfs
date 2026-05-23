import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Home as HomeIcon, Shield, TrendingUp, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

/**
 * CMFS Website - Modern Minimalist with Warmth
 * Design Philosophy: Professional yet approachable, trustworthy yet modern
 * Color Palette: Deep charcoal (#1a1a1a), Warm gold (#d4a574), Soft cream (#f9f7f4)
 * Typography: Playfair Display (headings) + Poppins (body)
 */

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: HomeIcon,
      title: "First-Time Buyers",
      description:
        "We guide first-time buyers through every step of the mortgage process, making your dream home a reality.",
      details:
        "Expert advice on mortgage options, affordability assessments, and property searches tailored to your needs.",
    },
    {
      icon: TrendingUp,
      title: "Remortgages",
      description:
        "Unlock better rates and terms with our comprehensive remortgage solutions.",
      details:
        "We compare lenders to find you the best deals, potentially saving you thousands over your mortgage term.",
    },
    {
      icon: Shield,
      title: "Protection Insurance",
      description:
        "Protect your family and investment with comprehensive protection insurance.",
      details:
        "Life insurance, payment protection, and critical illness cover to safeguard your financial future.",
    },
  ];

  const testimonials = [
    {
      name: "Kevin Dinsdale",
      text: "We have used Carol Mitchell financial services for multiple property purchases for our BTL property portfolio and our own personal property with no problems whatsoever! Carol and Sacha are the best!!",
      rating: 5,
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/RfACLqoesGyKAVH2pr3nwH/testimonial-diverse-family-ttu8N5hxwAw9Zxzgz5snU6.webp",
    },
    {
      name: "Elliott Ramsey",
      text: "We received outstanding service from start to finish. Sacha looked after us when buying and mortgaging our new property, she made the whole process extremely smooth and was on hand at any time to explain any questions we had.",
      rating: 5,
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/RfACLqoesGyKAVH2pr3nwH/testimonial-diverse-family-ttu8N5hxwAw9Zxzgz5snU6.webp",
    },
    {
      name: "Imogen Merry",
      text: "The best mortgage advisors in the North East! We used Carol Mitchell Financial Services to buy our first home & the whole process could not have been better! From the very first meeting to when we got the keys Carol was so helpful to us.",
      rating: 5,
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/RfACLqoesGyKAVH2pr3nwH/testimonial-diverse-family-ttu8N5hxwAw9Zxzgz5snU6.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
              <HomeIcon className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              CMFS
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text Content */}
          <div className="space-y-6 z-10">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Secure Your Home,
                <span className="text-accent"> Secure Your Future</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Expert mortgage and financial services to help you achieve your property goals. From first-time buyers to experienced investors, we're here to guide you every step of the way.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/RfACLqoesGyKAVH2pr3nwH/hero-family-home-SP8vkFD6K7mKaSgDHfKkSc.webp"
              alt="Young couple in front of their new home"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Decorative accent line */}
        <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-accent/0 via-accent to-accent/0" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className={`p-8 cursor-pointer transition-all duration-300 border-2 ${
                    activeService === idx
                      ? "border-accent bg-accent/5 shadow-lg"
                      : "border-border hover:border-accent/50"
                  }`}
                  onClick={() => setActiveService(idx)}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" style={{ width: '24px', height: '24px' }} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  {activeService === idx && (
                    <div className="pt-4 border-t border-border mt-4">
                      <p className="text-sm text-foreground">{service.details}</p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/RfACLqoesGyKAVH2pr3nwH/hero-financial-consultation-EyfgaDTqfBiKejDLVCeUre.webp"
              alt="Financial advisor consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About Carol Mitchell Financial Services
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Based in Stockton-on-Tees, we are dedicated mortgage and financial services specialists with years of experience helping clients across the North East achieve their property goals.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our team, led by Carol and Sacha, combines expertise with genuine care for our clients. We believe in building long-term relationships based on trust, transparency, and exceptional service.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" style={{ width: '24px', height: '24px' }} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Expert Guidance</h4>
                  <p className="text-muted-foreground">
                    Personalized advice tailored to your financial situation
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" style={{ width: '24px', height: '24px' }} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Trusted Partner</h4>
                  <p className="text-muted-foreground">
                    100% recommend rating with genuine client testimonials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by families and investors across the North East
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="container text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Ready to Secure Your Future?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get in touch with our team today for a free consultation
            </p>
          </div>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Schedule Your Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="font-display text-lg font-bold text-foreground">
                  CMFS
                </span>
              </div>
              <p className="text-muted-foreground">
                Mortgage & Protection Specialists helping you secure your home
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-accent transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Contact Us</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>93 High Street, Stockton-on-Tees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <a href="tel:+441642500017" className="hover:text-accent transition-colors">
                    +44 1642 500017
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <a href="mailto:sacha@cmfsltd.co.uk" className="hover:text-accent transition-colors">
                    sacha@cmfsltd.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2026 Carol Mitchell Financial Services Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
