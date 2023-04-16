import {
  Button,
  Col,
  Grid,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
  useMantineTheme,
  type MantineTheme,
} from "@mantine/core";
import {
  IconAward,
  IconFlame,
  IconMoodCrazyHappy,
  IconReportMoney,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = (theme: MantineTheme) => [
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  {
    icon: IconReportMoney,
    title: "Master your budget",
    description:
      "Personalized budgeting, financial tracking, and smart purchase suggestions to help you stay on top of your spending.",
  },
  {
    icon: IconAward,
    title: "Stay organized with ease",
    description:
      "Create and manage multiple, customizable wishlists with our user-friendly drag-and-drop organization system.",
  },
  {
    icon: IconMoodCrazyHappy,
    title: "Embrace conscious consumption",
    description:
      "Introducing the waiting period feature, designed to encourage thoughtful purchases by requiring you to wait a certain number of days before buying an item.",
  },
  {
    icon: IconFlame,
    title: "Discover, share, and save",
    description: (
      <>
        Experience the full power of{" "}
        <span
          style={{
            fontWeight: 700,
            color:
              theme.colorScheme === "dark" ? "white" : theme.colors.gray[9],
          }}
        >
          do i really need this?
        </span>{" "}
        with additional features like prioritization, social engagement, price
        tracking, informed decision-making, gamification, and valuable insights
        into your wishlist habits.
      </>
    ),
  },
  /* eslint-enable @typescript-eslint/no-unsafe-assignment */
];

export function Features() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isDark = theme.colorScheme === "dark";

  const items = features(theme).map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="outline"
        color={isDark ? "gray" : "dark"}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500} color={isDark ? "white" : "dark"}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2} italic>
            Meet your wishlist sidekick
          </Title>
          <Text c="dimmed">
            Discover the smarter way to manage your wants and budget with our
            handy web app designed to make your wishlist journey seamless and
            enjoyable.{" "}
            <span
              style={{
                fontWeight: 700,
                color: isDark ? "white" : theme.colors.gray[9],
              }}
            >
              do i really need this?
            </span>{" "}
            brings together an array of features to help you stay organized,
            make informed decisions, and keep your spending in check.
          </Text>

          <Button
            variant="outline"
            color={isDark ? "gray" : "dark"}
            mt="xl"
            radius="md"
            size="xl"
            // cool rainbow background gradient
            // style={{
            //   backgroundImage: `background-image: linear-gradient(273.64deg,#35c3f3 11.27%,#8b9fe8 36.72%,#e681d8 61.72%,#ffa9a4 82.79%,#fed2ce 107.29%,#fed2ce 107.29%)`,
            // }}
          >
            Get started
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
