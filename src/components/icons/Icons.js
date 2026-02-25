// Reusable SVG Icons Component

export const SearchIcon = ({ size = 24, color = "#8b6f47" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

export const MenuIcon = ({ size = 24, color = "#3d3d3d" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const CloseIcon = ({ size = 28, color = "#3d3d3d" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const WhatsAppIcon = ({ size = 24, color = "#25D366" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.998 1.314c-1.555.901-2.998 2.2-4.088 3.71A9.9 9.9 0 003.02 15.97c.603 1.568 1.529 3.027 2.717 4.185 1.188 1.159 2.637 2.087 4.204 2.712 1.567.625 3.288.94 5.023.94a9.9 9.9 0 006.231-2.032 9.9 9.9 0 004.104-5.604 9.867 9.867 0 00-.4-6.647 9.9 9.9 0 00-3.594-5.047 9.87 9.87 0 00-6.179-1.791zm5.084 18.075c-1.308 0-2.593-.216-3.815-.637-1.223-.42-2.378-1.037-3.325-1.838-.947-.801-1.742-1.768-2.344-2.853-.602-1.085-.98-2.289-1.116-3.53-.135-1.242 0-2.535.403-3.767C2.97 7.566 4.3 5.94 5.953 4.684c1.653-1.256 3.59-1.917 5.636-1.917 1.047 0 2.081.167 3.08.496 1 .33 1.948.814 2.818 1.437.87.622 1.627 1.393 2.241 2.273.614.88 1.062 1.849 1.324 2.858.262 1.009.284 2.063.065 3.092-.22 1.029-.703 2.006-1.417 2.88-.715.874-1.627 1.629-2.704 2.225-1.077.596-2.298.938-3.585.998z"/>
  </svg>
);

export const StarIcon = ({ size = 20, filled = true, color = "#d4af37" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="2">
    <polygon points="12 2 15.09 10.26 24 12 15.09 13.74 12 22 8.91 13.74 0 12 8.91 10.26 12 2"></polygon>
  </svg>
);

export const CallIcon = ({ size = 24, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M22.5 1h-21C.7 1 0 1.7 0 2.5v19C0 22.3.7 23 1.5 23h21c.8 0 1.5-.7 1.5-1.5v-19C24 1.7 23.3 1 22.5 1zm0 20h-21v-19h21v19zm-18.5-12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm5 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm5 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM3.5 17h17v2h-17z"/>
  </svg>
);

export const ShoppingBagIcon = ({ size = 24, color = "#3d3d3d" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

export const HeartIcon = ({ size = 24, filled = false, color = "#d4af37" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export const ArrowRightIcon = ({ size = 20, color = "#d4af37" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const CheckIcon = ({ size = 24, color = "#25D366" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
