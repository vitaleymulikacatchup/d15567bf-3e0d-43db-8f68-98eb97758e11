"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Bot, BarChart3, Users, Plug, DollarSign, Rocket, Sparkles, Crown, MessageSquare, Shield, Mail, Twitter, Linkedin, Github, Zap } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SaasFlow"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="SaasFlow"
          description="Transform your business with our powerful SaaS platform. Streamline operations, boost productivity, and scale with confidence."
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Watch Demo", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541764050-kvvq3pnv.jpg"
          imageAlt="SaasFlow dashboard demonstration"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We empower businesses to reach their full potential through innovative SaaS solutions that simplify complex workflows and drive meaningful growth."
          buttons={[
            { text: "Learn More", href: "features" },
            { text: "Get Started", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful Features"
          description="Everything you need to streamline your business operations and accelerate growth"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Smart Automation",
              description: "Automate repetitive tasks and workflows to save time and reduce errors across your entire organization",
              icon: Bot
            },
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your business performance with real-time data visualization and reporting",
              icon: BarChart3
            },
            {
              title: "Team Collaboration",
              description: "Enable seamless collaboration with built-in communication tools and shared workspaces",
              icon: Users
            },
            {
              title: "API Integration",
              description: "Connect with your existing tools and systems through our robust API and pre-built integrations",
              icon: Plug
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business needs. No hidden fees, cancel anytime."
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Starter",
              badgeIcon: Rocket,
              price: "$29/month",
              subtitle: "Perfect for small teams getting started",
              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "Learn More", href: "features" }
              ],
              features: [
                "Up to 5 team members",
                "10GB storage",
                "Basic analytics",
                "Email support",
                "API access"
              ]
            },
            {
              id: "professional",
              badge: "Professional",
              badgeIcon: Sparkles,
              price: "$99/month",
              subtitle: "Advanced features for growing businesses",
              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "Up to 25 team members",
                "100GB storage",
                "Advanced analytics",
                "Priority support",
                "Custom integrations",
                "Advanced automation"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              badgeIcon: Crown,
              price: "$299/month",
              subtitle: "Comprehensive solution for large organizations",
              buttons: [
                { text: "Contact Sales", href: "contact" },
                { text: "Schedule Demo", href: "about" }
              ],
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "Custom analytics",
                "24/7 dedicated support",
                "White-label options",
                "Advanced security",
                "Custom development"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from businesses that have transformed their operations with SaasFlow"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechCorp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541768670-7x1ze9wu.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541769651-gddsqjv4.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541770379-tv2iz267.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541771015-ozp1rzkk.jpg"
            },
            {
              id: "5",
              name: "Jessica Williams",
              role: "Founder",
              company: "ScaleUp Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541771773-azwx0wtr.jpg"
            },
            {
              id: "6",
              name: "Alex Thompson",
              role: "Operations Manager",
              company: "EfficiencyPro",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541772452-k2wk6rsq.jpg"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on SaasFlow to power their operations"
          tag="Trusted By"
          tagIcon={Shield}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541773586-l2wljcqe.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541774370-izms9fft.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541775094-ha13g8ic.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541775836-mcai32v9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541776499-n6af3gsb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541777134-x9coixcx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541777641-mt7jb0n2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541778233-ndvv1aa0.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about SaasFlow"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How quickly can I get started with SaasFlow?",
              content: "You can get started immediately with our free trial. Simply sign up, and you'll have access to all features for 14 days. Our onboarding process takes just a few minutes."
            },
            {
              id: "2",
              title: "What integrations are available?",
              content: "SaasFlow integrates with over 100+ popular tools including Slack, Google Workspace, Microsoft 365, Salesforce, HubSpot, and many more. We also provide a robust API for custom integrations."
            },
            {
              id: "3",
              title: "Is my data secure?",
              content: "Absolutely. We use enterprise-grade security with AES-256 encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure data centers with 99.9% uptime guarantee."
            },
            {
              id: "4",
              title: "Can I cancel my subscription anytime?",
              content: "Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll continue to have access to your account until the end of your billing period."
            },
            {
              id: "5",
              title: "Do you offer customer support?",
              content: "We provide comprehensive support including email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers. We also have extensive documentation and video tutorials."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to transform your business?"
          description="Start your free trial today and discover how SaasFlow can streamline your operations and accelerate growth."
          inputPlaceholder="Enter your business email"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required for the free trial."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763541778909-208ahjs5.jpg"
          imageAlt="Business team collaboration workspace"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SaasFlow"
          copyrightText="© 2025 SaasFlow, Inc. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Integrations", href: "features" },
                { label: "API", href: "features" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Blog", href: "https://blog.saasflow.com" },
                { label: "Careers", href: "https://careers.saasflow.com" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "https://docs.saasflow.com" },
                { label: "Help Center", href: "faq" },
                { label: "Status", href: "https://status.saasflow.com" },
                { label: "Changelog", href: "https://changelog.saasflow.com" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://saasflow.com/privacy" },
                { label: "Terms of Service", href: "https://saasflow.com/terms" },
                { label: "Cookie Policy", href: "https://saasflow.com/cookies" },
                { label: "GDPR", href: "https://saasflow.com/gdpr" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/saasflow",
              ariaLabel: "Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/saasflow",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Github,
              href: "https://github.com/saasflow",
              ariaLabel: "GitHub"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}