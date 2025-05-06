import { TestimonialRender,testimonialItem } from "./Testimonial";
import logo from "@/assets/pictures/john-vid-DH1dABIkjYo-unsplash.jpg"



export const testimonialItems: testimonialItem[] = [
    {
      logo: logo,
      message: "This platform completely changed how we manage our projects. It's fast, reliable, and incredibly user-friendly.",
      username: "Alice Johnson",
      position: "Product Manager at TechFlow"
    },
    {
        logo: logo,
      message: "We've seen a 50% increase in productivity since adopting this solution. Highly recommend it!",
      username: "Bob Smith",
      position: "CTO at InnovateX"
    },
    {
        logo: logo,
      message: "Our team collaboration has never been smoother. The interface is intuitive and powerful.",
      username: "Clara Lee",
      position: "Lead Designer at BrightLabs"
    },
    {
        logo: logo,
      message: "An outstanding tool with excellent customer support. We were onboarded in just one day.",
      username: "David Kim",
      position: "CEO at LaunchPoint"
    }
  ];
  

export const Testimonials=()=>(
    <TestimonialRender testimonialItems={testimonialItems}/>
)