import { Button } from '@/components/ui/button';
import { Flex, Text } from '@radix-ui/themes';
export default function Home() {
  return (
    <main>
      <Flex justify="center" align="center" gap="6">
        <h1>hello</h1>
        <Button
          variant="secondary"
          className="animate-in zoom-in  duration-500"
        >
          Seconday
        </Button>
      </Flex>
    </main>
  );
}
