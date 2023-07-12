import Layout from "~/components/shared/layout";
import Button from "~/components/ui/button";
import { changeColor } from "~/utils/colorMode";

export default function Home() {
  return (
    <Layout>
      <Button name="color-mode-switch" onClick={changeColor}>
        Color
      </Button>
    </Layout>
  );
}
