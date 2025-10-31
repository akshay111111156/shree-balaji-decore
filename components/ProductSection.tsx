import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { name: 'Plain Acrylic', href: '/products/PlainAcrylic', image: '/images/plain.png' },
  { name: 'Cane Acrylic', href: '/products/caneacrylic', image: '/images/plain.png' },
  { name: 'Solid Colour Louvers', href: '/products/solidcolourlouvers', image: '/images/plain.png' },
  { name: 'Solid Colour Acrylic', href: '/products/solidcolouracrylic', image: '/images/plain.png' },
  { name: 'Marble Louvers', href: '/products/marblelouvers', image: '/images/plain.png' },
  { name: 'Corien Sheet', href: '/products/CorienSheet', image: '/images/plain.png' },
];

const ProductSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // After 0.5s delay, set visible true to trigger fade-in + animation
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="products" className="product-section">
      <h2 className="section-title">Popular Categories</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <Link
            key={index}
            href={product.href}
            className={`product-item ${visible ? 'visible' : 'hidden'}`}
            aria-label={`View gallery for ${product.name}`}
          >
            <div className="image-wrapper floating">
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={250}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="product-name">{product.name}</p>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .product-section {
          text-align: center;
          padding: 50px 20px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
        }

        .product-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .product-item {
            flex: 0 0 calc((100% / 3) - 15px);
            max-width: calc((100% / 3) - 15px);
          }
        }

        @media (max-width: 1023px) and (min-width: 769px) {
          .product-item {
            flex: 0 0 calc((100% / 2) - 15px);
            max-width: calc((100% / 2) - 15px);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          .product-grid {
            gap: 20px;
          }
          .product-item {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }

        .product-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: opacity 1s ease, transform 0.2s ease-in-out;
          color: inherit;
          text-decoration: none;
          opacity: 0; /* initially hidden */
        }
        .product-item.visible {
          opacity: 1; /* fade in */
        }
        .product-item:hover {
          transform: translateY(-5px);
        }

        .image-wrapper {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #ddd;
        }

        .product-name {
          margin-top: 15px;
          font-size: 1.2rem;
          font-weight: 500;
        }

        /* Floating up/down animation */
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .floating {
          animation: floatUpDown 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductSection;
