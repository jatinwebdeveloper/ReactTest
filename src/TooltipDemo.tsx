
type Props = {
  
  mouseOnIn: () => void;
  mouseOnOut: () => void;
  mousePress: () => void;
  OnHover: boolean;
  secondary: boolean;
};

export const TooltipDemo = ({ OnHover,secondary,mouseOnOut, mouseOnIn, mousePress,
}: Props) => {
  return (
    <div>
      { console.log("f",secondary)}
      {OnHover ? (
      
          <h1
            
            style={{color: secondary ? "red" : "blue"}}
            onMouseDown={mousePress}
            onMouseOver={mouseOnIn}
            onMouseOut={mouseOnOut}
          >
            Click On Text 2 To change Colour
          </h1>
            ) : (
        <h1
          
          style={{color: "red"}}
          onMouseOver={mouseOnIn}
          onMouseOut={mouseOnOut}
        >
          Hover On This Text To See Text 2 
        </h1>
      )}
    </div>
  );
};
