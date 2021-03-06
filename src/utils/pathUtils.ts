interface IAngle {
    x: number,
    y: number
}

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number): IAngle {
    var angleInRadians = angleInDegrees * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
}

export function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): string {

    var start = polarToCartesian(x, y, radius, startAngle);
    var end = polarToCartesian(x, y, radius, endAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y
    ].join(" ");

    return d;       
}