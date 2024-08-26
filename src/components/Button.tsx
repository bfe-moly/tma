import {
  AppearanceProvider,
  useColorScheme,
  usePlatform,
  useTheme,
} from "@twa-dev/mark42";
import { Button } from "antd-mobile";
import React from "react";

export const MyButton = (props: any) => {
  return <Button {...props} />;
};
