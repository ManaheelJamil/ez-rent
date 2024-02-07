import { Children, isValidElement, useMemo, ReactNode } from "react";

interface ProductGridProps {
  children: ReactNode;
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
  console.log("first");
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(isValidElement).length;
    return {
      base: Math.min(2, count),
      md: Math.min(3, count),
      lg: Math.min(4, count),
      xl: Math.min(4, count),
    };
  }, [props.children]);

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6`}
      {...props}
    />
  );
};

export default ProductGrid;
