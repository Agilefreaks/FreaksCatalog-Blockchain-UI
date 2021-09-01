import React from 'react';
import { Image, Flex, Text, Link } from 'rimble-ui';

function GuestRole() {
  return (
    <div>
      <Text
        mt={ 4 }
        fontSize={ 5 }
      >
        It seems you are just a regular person.
      </Text>
      <Flex
        mt={ 5 }
      >
        <Text
          mt={ 3 }
          fontSize={ 5 }
        >
          If you want to become a Freak, consider applying:&nbsp;
          <Link
            href="https://www.agilefreaks.com/jobs"
            fontSize={ 5 }
          >
            here
          </Link>
        </Text>
        <Image
          ml={ 6 }
          src="https://serving.photos.photobox.com/85545555ca93447dad2c2eb238e6726689c9b7939d05212fb69f54fa334d6bbbe3a89b13.jpg"
          alt="freak meme"
          borderRadius={ 59 }
        />
      </Flex>
    </div>
  );
}

export default GuestRole;
