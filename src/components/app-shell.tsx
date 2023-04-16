import {
  AppShell,
  Burger,
  Footer,
  Header,
  MediaQuery,
  Navbar,
  Text,
  Title,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useState, type PropsWithChildren, type ReactElement } from "react";

import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

const ActionToggle = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[0]
              : theme.colors.dark[6],
        })}
      >
        {colorScheme === "dark" ? (
          <IconSun size="1.2rem" />
        ) : (
          <IconMoonStars size="1.2rem" />
        )}
      </ActionIcon>
    </Group>
  );
};

const useStyles = createStyles((theme) => ({
  responsiveTitle: {
    fontSize: theme.headings.sizes.h1.fontSize,
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.xl,
    },
  },
}));

type TLayoutProps = PropsWithChildren<{
  withNavbar?: boolean;
}>;
type TLayout = (props: TLayoutProps) => ReactElement;

export const Layout: TLayout = ({ children, withNavbar = true }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <AppShell
      styles={{
        root: {
          border: 0,
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        withNavbar ? (
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Text>Application navbar</Text>
          </Navbar>
        ) : undefined
      }
      footer={
        <Footer
          height={60}
          p="md"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            [theme.fn.smallerThan("sm")]: { flexDirection: "column" },
          }}
        >
          <Text size="xs">© 2023 buzzing ltd</Text>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Title
              className={classes.responsiveTitle}
              color={theme.colorScheme === "dark" ? "white" : "black"}
              weight={800}
              transform="uppercase"
              italic
            >
              do i really need this?
            </Title>
            <ActionToggle />
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
