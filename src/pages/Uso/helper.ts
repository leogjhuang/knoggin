export function drawCircle(ctx, x, y, r, c, options: any = {}) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fillStyle = c || "red";
  ctx.globalAlpha = options.alpha || 1;
  if (options.glow) ctx.shadowBlur = 100;
  if (options.glowColor) ctx.shadowColor = options.glowColor || "aqua";
  if (options.fill || options.fill == undefined) ctx.fill();
  ctx.shadowBlur = 0;
  ctx.lineWidth = options.outlineWidth || 1;
  ctx.strokeStyle = options.outlineColor || "black";
  if (options.outline) ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

export function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  font,
  color = "white",
  align = "center",
  baseline = "middle",
  alpha = 1,
  shadow = false,
  shadowOffset = 1,
  shadowColour = "#000000",
) {
  let options: any = {};
  if (font instanceof Object) {
    options = font;
  }
  ctx.beginPath();
  ctx.font = options.font || font || "20px Arial";

  ctx.textAlign = options.align || align || "default";
  ctx.globalAlpha = alpha;
  ctx.textBaseline = options.baseline || baseline || "default";
  if (shadow) {
    ctx.fillStyle = shadowColour;
    ctx.lineWidth = 2;
    const offset = shadowOffset;
    ctx.fillText(text, x + offset, y + offset);
  }
  ctx.fillStyle = options.color || color || "red";
  ctx.fillText(text, x, y);
  ctx.globalAlpha = 1;
  ctx.closePath();
}

export function drawRectangle(ctx, x, y, w, h, c, options: any = {}) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.rect(0, 0, w, h);
  ctx.fillStyle = c || "grey";
  ctx.globalAlpha = options.alpha || 1;
  if (options.fill == undefined || options.fill) ctx.fill();
  ctx.strokeStyle = options.outlineColor || "black";
  ctx.lineWidth = options.outlineWidth || 1;
  if (options.outline) ctx.stroke();
  ctx.closePath();
  ctx.restore();
}
