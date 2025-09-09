import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="text-2xl font-bold gradient-text">
              &lt;SaudSaeed /&gt;
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building digital experiences that make a difference. Always learning, 
              always coding, always growing.
            </p>

        

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                © 2024 Saud Saeed. All rights reserved. • Currently seeking new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;