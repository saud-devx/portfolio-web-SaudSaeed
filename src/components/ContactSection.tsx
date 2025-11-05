import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log('Form submitted:', formData);
  // };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saud.devx@gmail.com',
      href: 'mailto:saud.devx@gmail.com',
      primary: true
    },
    {
      icon: Phone,
      label: 'UAE Mobile',
      value: '+971 565 913 928',
      href: 'tel:+971565913928'
    },
    {
      icon: Phone,
      label: 'Pakistan Mobile',
      value: '+92 303 359 0928',
      href: 'tel:+923033590928'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan (Open to Remote & Relocation)',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/saud-devx',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saud-saeed-587235375/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: ' https://x.com/iamsaudsaeed?t=wmBR4BFRqBPTQ62bPDYdRg&s=08',
      color: 'hover:text-cyan-400'
    }
  ];
  // Download CV function 
  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/download/resume`);
      if (!res.ok) throw new Error("Server error");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Saud_Saeed_Resume.pdf";
      link.click();

      toast.success("Resume downloaded ✅");
    } catch (err) {
      toast.error("Failed to download resume");
    } finally {
      setIsDownloading(false);
    }
  };

  // message sending handling 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_BASE = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_BASE}/api/v1/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      // Show beautiful toast
      toast("Message sent successfully!");

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Let's Work Together</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm currently seeking new opportunities and would love to hear about your project.
                  Whether you have a question, want to collaborate, or just want to say hi,
                  feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-smooth ${info.primary
                          ? 'bg-gradient-primary text-primary-foreground shadow-glow-cyan'
                          : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground transition-smooth ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-gradient-secondary hover:shadow-glow-purple"
                    onClick={handleDownloadCV}
                    disabled={isDownloading}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="bg-muted border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="bg-muted border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-muted border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-muted border-muted-foreground/20 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow-cyan">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;