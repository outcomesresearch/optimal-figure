import { useState, useEffect } from "react";
import { Stack, Title, Button, Group } from "@mantine/core";
import rootTree from "../assets/rootTree";
import { ROOT } from "../assets/ids";
import ChoiceCard from "../components/ChoiceCard";

const buttonProps = {
  variant: "subtle",
  color: "gray",
  size: "compact-sm",
  tt: "uppercase" as const,
};

const StepperWrapper = () => {
  const [currentStep, setCurrentStep] = useState<string>(ROOT);
  const [path, setPath] = useState<string[]>([]);
  const [currentlySelectedChoice, setCurrentlySelectedChoice] =
    useState<string>();
  const [currentConfig, setCurrentConfig] = useState(rootTree[currentStep]);

  useEffect(() => {
    console.log({ currentStep }, rootTree[currentStep]);
    setCurrentlySelectedChoice(undefined);
    setCurrentConfig(rootTree[currentStep]);
  }, [currentStep]);

  // can be either Back, Back To Intro
  function getBackButton() {
    // Back
    if (path.length > 0) {
      return (
        <Button
          {...buttonProps}
          onClick={() => setCurrentStep(path.pop() as string)}
        >
          Back
        </Button>
      );
    }

    return (
      // Back to Intro
      <Button
        {...buttonProps}
        onClick={() => {
          console.log("need to set up router to route to intro message");
        }}
      >
        Back to intro
      </Button>
    );
  }

  // can be either Next, Continue, or Start Over
  function getForwardButton() {
    if (currentConfig.choices) {
      return (
        <Button
          {...buttonProps}
          disabled={!currentlySelectedChoice}
          onClick={() => {
            console.log({ currentlySelectedChoice });
            setPath([...path, currentStep]); // Save the current step in the path
            setCurrentStep(currentlySelectedChoice);
          }}
        >
          Next
        </Button>
      );
    }

    if (
      !currentConfig.choices && // if no configured choices
      !currentConfig.next // if no configured next step
    ) {
      return (
        <Button
          {...buttonProps}
          onClick={() => {
            setCurrentStep(path[0]);
            setPath([]);
          }}
        >
          Start over
        </Button>
      );
    }

    if (currentConfig.type === "statement" && currentConfig.next) {
      return (
        <Button
          {...buttonProps}
          onClick={() => {
            setPath([...path, currentStep]);
            setCurrentStep(currentConfig.next);
          }}
        >
          Continue
        </Button>
      );
    }
  }

  return (
    <>
      <Group justify="center">
        <Stack>
          <Title order={4}>{currentConfig.title}</Title>

          <DynamicComponent component={currentConfig.component} />
          <Group justify="space-between">
            {currentConfig?.choices ? (
              <Group>
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
          </Group>
          <Group justify="space-between">
            {getBackButton()}
            {getForwardButton()}
          </Group>
        </Stack>
      </Group>
    </>
  );
};

function DynamicComponent(props) {
  const { component: Component, ...rest } = props;

  return <Component {...rest} />;
}

export default StepperWrapper;
