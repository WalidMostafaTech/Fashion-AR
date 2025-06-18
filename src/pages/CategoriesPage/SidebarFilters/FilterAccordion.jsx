import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FilterAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full font-semibold text-right py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300"
      >
        <div className="pt-2 space-y-2">{children}</div>
      </div>
    </div>
  );
}
