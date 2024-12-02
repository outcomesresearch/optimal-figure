import { useState, useEffect } from "react";
import { Stack, Title, Button, Group } from "@mantine/core";
import rootTree from "../assets/rootTree";
import { ROOT } from "../assets/ids";
import ChoiceCard from "../components/ChoiceCard";
import { Link } from "react-router";
import { useParams } from "react-router";

const buttonProps = {
  variant: "subtle",
  color: "gray",
  tt: "uppercase" as const,
};

const StepperWrapper = () => {
  const { step: currentStep } = useParams();
  const [path, setPath] = useState<string[]>([]);
  const [currentlySelectedChoice, setCurrentlySelectedChoice] =
    useState<string>();
  const [currentConfig, setCurrentConfig] = useState(
    rootTree[currentStep || ROOT]
  );

  useEffect(() => {
    // When url param is available, initialize the current step and path sequence
    if (currentStep) {
      console.log(currentStep);
      setCurrentlySelectedChoice(undefined);
      setCurrentConfig(rootTree[currentStep]);
      // setPath(findPreviousSteps(rootTree[currentStep].inputs[0]));
    }
  }, [currentStep]);

  // can be either Back, Back To Intro
  function getBackButton() {
    // Back
    if (path.length > 0) {
      return (
        <Link to={`/decision-tree/${path.pop()}`}>
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
