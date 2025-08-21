# Lucid Enterprise Comparison Tool

An interactive comparison tool for Lucid Team vs Enterprise plans, designed to help sales teams and customers understand the key differences and business value.

## Features

- **Interactive Category Selection**: Users can select which categories matter most to them
- **Dynamic Content Filtering**: Table updates instantly based on selections  
- **Value-Driven Messaging**: Focuses on security, cost optimization, and business risks
- **Mobile Responsive**: Works seamlessly on all devices
- **Fast Loading**: Uses CDN resources for optimal performance

## Live Demo

Visit the live tool at: `https://mikedawsonlucid.github.io/featurecomparison/`

## Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. No build process required - it's pure HTML, CSS, and JavaScript

## File Structure

```
├── index.html          # Main application file
├── js/
│   └── main.js        # JavaScript functionality
└── README.md          # This file
```

## Customization

### Adding New Features

Edit the HTML in `index.html` to add new comparison rows. Follow this pattern:

```html
<div class="feature-row [category]-feature grid grid-cols-4 border-b border-gray-100" style="display: none;">
    <div class="p-4 flex items-center gap-2">
        <span class="text-[color]-600">[emoji]</span>
        <span class="font-medium">Feature Name</span>
    </div>
    <div class="p-4 text-center text-gray-600">
        Team plan limitation
    </div>
    <div class="p-4 text-center text-green-700 font-medium">
        Enterprise advantage
    </div>
    <div class="p-4 text-center text-red-600 text-sm font-medium">
        Business impact/risk
    </div>
</div>
```

### Styling Changes

The tool uses Tailwind CSS for styling. Modify classes in `index.html` or add custom CSS in the `<style>` section.

## Deployment

This tool is designed for GitHub Pages deployment:

1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" and choose `main`
4. Your tool will be available at `https://mikedawsonlucid.github.io/featurecomparison/`

## Browser Support

- Chrome (recommended)
- Firefox  
- Safari
- Edge

## License

MIT License - feel free to customize for your organization's needs.