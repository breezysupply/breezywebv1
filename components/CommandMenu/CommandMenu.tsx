/* eslint-disable react/no-unknown-property */
import * as React from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Twitter, Linkedin, GitHub, Sun, Moon, Monitor } from "react-feather";
import "./CommandMenu.css";

const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setTheme } = useTheme();

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: { key: string; metaKey: any }) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSetTheme = (val: string) => {
    setTheme(val);
    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <div cmdk-header="">
        <Command.Input placeholder="Type a command or search..." />
        <button
          aria-label="Close command menu"
          cmdk-header-esc=""
          onClick={() => setOpen(false)}
          tabIndex={-1}
        >
          ESC
        </button>
      </div>
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        {/* <Command.Group heading="Navigation">
          <Command.Item>Home</Command.Item>
          <Command.Item>Posts</Command.Item>
        </Command.Group> */}

        <Command.Group heading="Connect">
          <Command.Item
            onSelect={() =>
              window.open("https://twitter.com/hybrid_alex", "_blank")
            }
          >
            <Twitter width={".9rem"} /> <span>Twitter</span>
          </Command.Item>
          <Command.Item
            onSelect={() =>
              window.open("https://github.com/alexcarpenter", "_blank")
            }
          >
            <GitHub width={".9rem"} />
            <span>Github</span>
          </Command.Item>
          <Command.Item
            onSelect={() =>
              window.open(
                "https://www.linkedin.com/in/imalexcarpenter/",
                "_blank"
              )
            }
          >
            <Linkedin width={".9rem"} />
            <span>LinkedIn</span>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Appearance">
          <Command.Item onSelect={handleSetTheme}>
            <Monitor width={".9rem"} /> <span>System</span>
          </Command.Item>
          <Command.Item onSelect={handleSetTheme}>
            <Sun width={".9rem"} /> <span>Light</span>
          </Command.Item>
          <Command.Item onSelect={handleSetTheme}>
            <Moon width={".9rem"} /> <span>Dark</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export { CommandMenu };