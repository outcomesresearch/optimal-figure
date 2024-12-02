// @ts-nocheck
import { useState, useEffect } from "react";
import { Stack, Title, Button, Group, Progress, Card } from "@mantine/core";
import rootTree from "../assets/rootTree";
import { ROOT } from "../assets/ids";
import ChoiceCard from "../components/ChoiceCard";
import { Link } from "react-router";
import { useParams } from "react-router";
import { findLongestPath, findPreviousSteps } from "../utils";

const buttonProps = {
  variant: "subtle",
  color: "gray",
  tt: "uppercase" as const,
};

const StepperWrapper = () => {
  const [progress, setProgress] = useState(0);
  const { step: currentStep } = useParams();
  const [path, setPath] = useState<string[]>([]);
  const [currentlySelectedChoice, setCurrentlySelectedChoice] =
    useState<string>();
  const [currentConfig, setCurrentConfig] = useState(
    rootTree[currentStep || ROOT]
  );

  useEffect(() => {
    let effectiveStep = currentStep || ROOT;

    // When url param is available, initialize the current step and path sequence

    const current = rootTree[effectiveStep];
    const path = current.inputs.length
      ? findPreviousSteps(current.inputs[0])
      : [];

    setCurrentlySelectedChoice(undefined);
    setCurrentConfig(current);
    setPath(path);

    // Calculate progress
    let longestNextPath = findLongestPath(effectiveStep, rootTree) - 1;
    let totalPathLength = longestNextPath + path.length;
    let pathDoneSoFar = path.length;
    setProgress((pathDoneSoFar / totalPathLength) * 100);
  }, [currentStep]);

  // can be either Back, Back To Intro
  function getBackButton() {
    // Back
    if (path.length > 0) {
      return (
        <Link to={`/decision-tree/${path[path.length - 1]}`}>
          <Button {...buttonProps}>Back</Button>
        </Link>
      );
    }

    return (
      // Back to Intro
      <Link to={{ pathname: "/intro" }}>
        <Button {...buttonProps}>Back to intro</Button>
      </Link>
    );
  }

  // can be either Next, Continue, or Start Over
  function getForwardButton() {
    if (currentConfig.choices) {
      return (
        <Link to={`/decision-tree/${currentlySelectedChoice}`}>
          <Button {...buttonProps} disabled={!currentlySelectedChoice}>
            Next
          </Button>
        </Link>
      );
    }

    if (
      !currentConfig.choices && // if no configured choices
      !currentConfig.next // if no configured next step
    ) {
      return (
        <Link to="/decision-tree">
          <Button {...buttonProps}>Start over</Button>
        </Link>
      );
    }

    if (currentConfig.type === "statement" && currentConfig.next) {
      return (
        <Link to={`/decision-tree/${currentConfig.next}`}>
          <Button {...buttonProps}>Continue</Button>
        </Link>
      );
    }
  }

  if (!currentConfig) return;

  return (
    <Card
      shadow="sm"
      padding="lg"
      my={{ base: "lg", md: "48px" }}
      w="100%"
      radius="md"
      withBorder
    >
      <Card.Section pb="md">
        <Progress value={progress} w="100%" radius={0} />
      </Card.Section>
      <Group justify="center" w="100%">
        <Stack w="100%">
          <Title order={4} mr="auto">
            {currentConfig.title}
          </Title>
          <DynamicComponent component={currentConfig.component} />
          {currentConfig?.choices ? (
            <Group justify="center">
              {currentConfig?.choices.map((choice) => (
                <ChoiceCard
                  key={choice.answer}
                  title={choice.answer}
                  description={choice.option_description}
                  isSelected={currentlySelectedChoice === choice.next}
                  onClick={() => {
                    setCurrentlySelectedChoice(choice.next);
                  }}
                />
              ))}
            </Group>
          ) : null}
          <Group justify="space-between" w="100%">
            {getBackButton()}
            {getForwardButton()}
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};

function DynamicComponent(props) {
  const { component: Component, ...rest } = props;

  return <Component {...rest} />;
}

export default StepperWrapper;
