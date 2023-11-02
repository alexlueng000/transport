import React, { useState, useEffect } from 'react';

type SvgIconProps = {
  src: string; // Filename of the SVG
  width?: string | number; // Optional width
  height?: string | number; // Optional height
};

export const SvgIcon2: React.FC<SvgIconProps> = ({ src, width, height }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(`/img/svg/${src}`); // Assuming your SVG files have .svg extension
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    if (src) {
      loadSvg();
    }
  }, [src]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: svgContent }} 
      style={{ width: width, height: height }}
    />
  );
};