import { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";

export interface Props {
  content?: ReactNode;
}

export const Info = ({ content }: Props) => {
  return (
    <Card className="border border-foreground">
      <CardHeader>
        <CardTitle>ОПИСАНИЕ</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};
