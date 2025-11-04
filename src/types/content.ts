export interface StickyBarContent {
  icon: string
  text: string
  link: string
}

export interface NavItem {
  text: string
  link: string
}

export interface HeaderContent {
  icon: string
  text: string
  navItems: NavItem[]
}

export interface HeroContent {
  headline: string
  subheadline: string
  ctaText: string
  ctaLink: string
  backgroundSvg: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface FeaturesContent {
  headline: string
  subheadline: string
  items: FeatureItem[]
}

export interface ProductItem {
  icon: string
  imageUrl?: string
  title: string
  buttonText: string
  buttonLink: string
}

export interface ProductsShowcaseContent {
  headline: string
  items: ProductItem[]
}

export interface SocialProofItem {
  icon: string
  quote: string
  rating: number
}

export interface SocialProofContent {
  headline: string
  items: SocialProofItem[]
  ctaText: string
  ctaLink: string
  ctaIcon: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  name: string
  items: FAQItem[]
}

export interface FAQContent {
  headline: string
  categories?: FAQCategory[]
  items?: FAQItem[] // Keep for backward compatibility
}

export interface FooterLink {
  text: string
  url: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface SocialMediaLink {
  icon: string
  url: string
}

export interface FooterContent {
  columns: FooterColumn[]
  socialMedia: SocialMediaLink[]
  copyright: string
  copyrightLink: string
  copyrightReserve: string
}

export interface GoodBuySection {
  rating: number
  headline: string
  subheadline: string
  ctaText: string
  ctaLink: string
  ctaIcon: string
  quote: {
    text: string
    icon: string
  }
}

export interface ContentData {
  stickyBar: StickyBarContent
  header: HeaderContent
  hero: HeroContent
  features: FeaturesContent
  productsShowcase: ProductsShowcaseContent
  socialProof: SocialProofContent
  faq: FAQContent
  footer: FooterContent
  goodBuy: GoodBuySection
}
