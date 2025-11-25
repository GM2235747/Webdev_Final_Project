/**
 * ColorCodedText component
 * Renders text with color coding based on markers:
 * - "rec." or "highly rec." = green (recommendation)
 * - "https://" or "http://" = blue (link)
 * - Default = muted (neutral)
 * 
 * Notes in mai.md indicated: red = note, green = rec, blue = link
 * Since all tracklist items are inherently notes, we highlight recs and links.
 */

interface ColorCodedTextProps {
  text: string;
  className?: string;
}

export function ColorCodedText({ text, className = "" }: ColorCodedTextProps) {
  // Check for recommendation markers
  const isRec = /\b(highly )?rec\.?\s*$/i.test(text);
  
  // Check for link markers
  const hasLink = /https?:\/\//i.test(text);

  // Determine color class
  let colorClass = "text-muted-foreground"; // default (neutral/note color)
  
  if (isRec) {
    colorClass = "text-green-500 dark:text-green-400"; // recommendation
  } else if (hasLink) {
    colorClass = "text-blue-500 dark:text-blue-400"; // link
  }

  return (
    <span className={`${colorClass} ${className}`}>
      {text}
    </span>
  );
}
