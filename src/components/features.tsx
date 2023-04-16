import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
  IconAward,
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

const features = [
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
    description:
      "Experience the full power of 'Do I Really Need This?' with additional features like prioritization, social engagement, price tracking, informed decision-making, gamification, and valuable insights into your wishlist habits.",
  },
];

export function Features() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="outline"
        color={theme.colorScheme === "dark" ? "gray" : "dark"}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
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
            enjoyable. 'Do I Really Need This?' brings together an array of
            features to help you stay organized, make informed decisions, and
            keep your spending in check.
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            mt="xl"
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
