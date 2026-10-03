import EditableImage from "./EditableImage";

export default function Logo({ size = 64, className }: { size?: number; className?: string }) {
  return (
    <EditableImage
      imageKey="logo"
      alt="بارانی نوور"
      className={className}
      style={{ width: size, height: size, objectFit: "contain", borderRadius: "50%" }}
    />
  );
}
