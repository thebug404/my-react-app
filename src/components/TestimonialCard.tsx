
import { useState, useEffect } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
  delay: number;
}

const TestimonialCard = ({ quote, author, role, imageSrc, delay }: TestimonialCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setImageLoaded(true);
  }, [imageSrc]);

  return (
    <div className={`backdrop-blur-card rounded-xl overflow-hidden animate-staggered-fade-in stagger-${delay}`}>
      <div className="p-6">
        <p className="italic text-muted-foreground mb-4">"{quote}"</p>
        <div className="flex items-center">
          <div className="image-blur-container w-12 h-12 rounded-full overflow-hidden mr-3">
            <img 
              src={imageSrc} 
              alt={author} 
              className={`w-full h-full object-cover image-blur ${imageLoaded ? 'loaded' : ''}`}
            />
          </div>
          <div>
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
