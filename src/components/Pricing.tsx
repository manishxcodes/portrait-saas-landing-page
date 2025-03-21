import { Banner } from "./ui/Banner"
import { PriceCard } from "./ui/PriceCard"

export const Pricing = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col mx-auto items-center justify-center px-4">
        <Banner title="Simple, transparent pricing"
        description="Choose the perfect plan for your professional image needs." 
        />
      <div className="md:flex gap-4 ">
      <PriceCard 
      header="Starter" 
      price="29$" 
      description="Perfect for individuals looking to enhance their professional image."
      buttonText="Get Started"
      feature={[
          "5 AI-generated portraits",
          "3 style variations",
          "Basic editing tools",
          "24-hour delivery",
          "Commercial usage rights"
        ]}
      />
      <PriceCard 
      header="Professional" 
      price="79$" 
      description="Ideal for professionals needing a complete personal brand package."
      buttonText="Get Started"
      feature={[
          "5 AI-generated portraits",
          "10 style variations",
          "Advance editing tools",
          "Priority 12-hour delivery",
          "Commercial usage rights", 
          "Multiple background options",
          "LinkedIn optimization"
        ]}
      />
      <PriceCard 
      header="Bussiness" 
      price="199$" 
      description="Perfect for teams and businesses requiring multiple profiles"
      buttonText="Get Started"
      feature={[
          "5 AI-generated portraits",
          "Unlimited style variations",
          "Premium editing tools",
          "6-hour express delivery",
          "Commercial usage rights", 
          "Custom backgrounds",
          "Personal branding consultation",
          "Team collaboration tools"
        ]}
      />
      
      </div>
    </div>
  )
}