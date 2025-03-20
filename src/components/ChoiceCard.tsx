import { Text, Card, Title, useMantineTheme } from "@mantine/core";

const ChoiceCard = ({
  onClick,
  title,
  description,
  isSelected,
}: {
  onClick: () => void;
  title: string;
  description: string;
  isSelected: boolean;
}) => {
  const theme = useMantineTheme();
  return (
    <Card
      variant="light"
      shadow="none"
      withBorder
      styles={{
        root: {
          borderColor: isSelected
            ? theme.colors.green[5]
            : theme.colors.gray[3],
        },
      }}
      color="gray"
      p="xs"
      maw={350}
      onClick={onClick}
      bg={isSelected ? "green.1" : "unset"}
    >
      <Title c={isSelected ? "green.9" : "gray.9"} order={5} fw={500}>
        {title}
      </Title>
      <Text c={isSelected ? "green.9" : "gray.9"}>{description}</Text>
    </Card>
  );
};

export default ChoiceCard;
