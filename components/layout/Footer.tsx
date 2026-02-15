import { FacebookFill, TwitterFill, InstagramFill } from "akar-icons";
import FadeIn from "@/components/ui/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="w-full px-8 lg:px-16 xl:px-20 2xl:px-24">
        {/* Main Footer Content */}
        <FadeIn>
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {/* Brand Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Panto</h3>
                <p className="text-secondary text-sm leading-relaxed max-w-xs">
                  The advantage of hiring a workspace with us is that givees you
                  comfortable service and all-around facilities.
                </p>
              </div>

              {/* Services Column */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-accent">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#email-marketing"
                      className="text-secondary text-sm hover:text-primary transition-colors"
                    >
                      Email Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#campaigns"
                      className="text-secondary text-sm hover:text-primary transition-colors"
                    >
                      Campaigns
                    </a>
                  </li>
                  <li>
                    <a
                      href="#branding"
                      className="text-secondary text-sm hover:text-primary transition-colors"
                    >
                      Branding
                    </a>
                  </li>
                </ul>
              </div>

              {/* Furniture Column */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-accent">Furniture</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#beds"
                      className="text-secondary text-sm hover:text-primary transition-colors"
                    >
                      Beds
                    </a>
                  </li>
                  <li>
                    <a
                      href="#chair"
                      className="text-secondary text-sm hover:text-primary transition-colors"
                    >
                      Chair
                    </a>
                  </li>
                  <li>
                    <a
                      href="#all"
                      className="text-secondary text-sm hover:text-primary transition-colors"
                    >
                      All
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us Column */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-accent">Follow Us</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-secondary text-sm hover:text-primary transition-colors group"
                    >
                      <FacebookFill size={20} className="text-primary" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-secondary text-sm hover:text-primary transition-colors group"
                    >
                      <TwitterFill size={20} className="text-primary" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-secondary text-sm hover:text-primary transition-colors group"
                    >
                      <InstagramFill size={20} className="text-primary" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary/60 text-sm">Copyright © 2021</p>
            <div className="flex items-center gap-6">
              <a
                href="#terms"
                className="text-secondary/60 text-sm hover:text-primary transition-colors"
              >
                Terms & Conditions
              </a>
              <span className="text-secondary/40">|</span>
              <a
                href="#privacy"
                className="text-secondary/60 text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
