import FeatureSection, {
  FeatureSectionProps,
} from "@/components/layout/ctas/jumpstart_your_idea";

interface AppProps {
  featureSectionProps: FeatureSectionProps;
}

const App: React.FC<AppProps> = ({ featureSectionProps }) => {
  return <FeatureSection {...featureSectionProps} />;
};

export default App;
