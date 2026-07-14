const fs = require('fs');
const path = require('path');

const convertHtmlToReact = (html, componentName) => {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;

  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    content = '<main className="pt-24 min-h-screen bg-background">' + mainMatch[1] + '</main>';
  }

  content = content
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/viewbox=/gi, 'viewBox=')
    .replace(/<!--[\s\S]*?-->/g, '');

  const singleTags = ['img', 'input', 'br', 'hr', 'path', 'circle', 'line', 'polygon', 'rect'];
  singleTags.forEach((tag) => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    content = content.replace(regex, `<${tag}$1 />`);
  });
  content = content.replace(/<\/(path|circle|line|polygon|rect)>/gi, '');

  return `
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function ${componentName}() {
  return (
    <>
      <Header />
      ${content}
      <Footer />
    </>
  );
}
`;
};

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const componentName = process.argv[4];

const htmlPath = path.resolve(inputFile);
const outPath = path.resolve(outputFile);

const html = fs.readFileSync(htmlPath, 'utf8');
const tsx = convertHtmlToReact(html, componentName);
fs.writeFileSync(outPath, tsx);
console.log(`${componentName} converted!`);
