import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      
            <a href="/">
                <Logo
                    icon={
                        <svg
                            className="mr-1 h-10 w-10 stroke-cyan-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M1.50 20 L1.5 20 L10 0 L19 20" stroke="cyan"></path>
                            <path d="M 20h14"></path>
                        </svg>
                    }
                    name="Aditya Majali's Website"
                />
            </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
                <NavMenuItem href="https://github.com/adityamajali">GitHub</NavMenuItem>
                <NavMenuItem href="https://twitter.com/AdityaMajali">Twitter</NavMenuItem>
                <NavMenuItem href="https://www.linkedin.com/in/aditya-majali/">Linkedin</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
