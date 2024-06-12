import { LangToggle } from "@/shared/ui/LangToggle";
import { BaseRadio } from "@/shared/ui/radio";
import { BaseSelect } from "@/shared/ui/select";

export const AboutPage = () => {
  return (
    <div
      style={{
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BaseSelect />
      <BaseRadio />
      <LangToggle />
    </div>
  );
};
