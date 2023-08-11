import DOMPurify from "dompurify";
import { useSession } from "next-auth/react";
import { Trans } from "next-i18next";
import type { AriaRole, ComponentType } from "react";
import React, { Fragment, useEffect } from "react";

import { APP_NAME, CONSOLE_URL, SUPPORT_MAIL_ADDRESS, WEBAPP_URL } from "@calcom/lib/constants";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { EmptyScreen, TopBanner } from "@calcom/ui";
import { AlertTriangle } from "@calcom/ui/components/icon";

type LicenseRequiredProps = {
  as?: keyof JSX.IntrinsicElements | "";
  className?: string;
  role?: AriaRole | undefined;
  children: React.ReactNode;
};

const LicenseRequired = ({ children, as = "", ...rest }: LicenseRequiredProps) => {
  const { t } = useLocale();
  const Component = as || Fragment;

  return (
    <Component {...rest}>
      {children}
    </Component>
  );
};

export const withLicenseRequired =
  <T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) =>
    // eslint-disable-next-line react/display-name
    (hocProps: T) =>
    (
      <LicenseRequired>
        <Component {...hocProps} />
      </LicenseRequired>
    );

export default LicenseRequired;