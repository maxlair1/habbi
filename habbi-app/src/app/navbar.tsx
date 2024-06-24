"use client";

import { Header, Octicon, Avatar, ActionMenu, ActionList } from "@primer/react";
import {
  CopyIcon,
  ArchiveIcon,
  WorkflowIcon,
  GearIcon,
  BookIcon,
  CommentIcon,
  RocketIcon,
} from "@primer/octicons-react";

function Navbar() {
  return (
    <>
      <Header></Header>
      <ActionMenu>
        <ActionMenu.Button>Open menu</ActionMenu.Button>
        <ActionMenu.Overlay width="auto">
          <ActionList>
            <ActionList.Item
              onSelect={() => alert("Workflows clicked")}
              inactiveText="Unavailable due to an outage"
            >
              Workflows
              <ActionList.LeadingVisual>
                <WorkflowIcon />
              </ActionList.LeadingVisual>
            </ActionList.Item>
            <ActionList.Item
              onSelect={() => alert("Archived items clicked")}
              inactiveText="Unavailable due to an outage"
            >
              Archived items
              <ActionList.LeadingVisual>
                <ArchiveIcon />
              </ActionList.LeadingVisual>
            </ActionList.Item>
            <ActionList.LinkItem
              href="/"
              inactiveText="Unavailable due to an outage"
            >
              Settings
              <ActionList.LeadingVisual>
                <GearIcon />
              </ActionList.LeadingVisual>
            </ActionList.LinkItem>
            <ActionList.Item
              onSelect={() => alert("Make a copy clicked")}
              inactiveText="Unavailable due to an outage"
            >
              Make a copy
              <ActionList.LeadingVisual>
                <CopyIcon />
              </ActionList.LeadingVisual>
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Group>
              <ActionList.GroupHeading>Github projects</ActionList.GroupHeading>
              <ActionList.LinkItem href="/">
                What&apos;s new
                <ActionList.LeadingVisual>
                  <RocketIcon />
                </ActionList.LeadingVisual>
              </ActionList.LinkItem>
              <ActionList.LinkItem href="/">
                Give feedback
                <ActionList.LeadingVisual>
                  <CommentIcon />
                </ActionList.LeadingVisual>
              </ActionList.LinkItem>
              <ActionList.LinkItem href="/">
                GitHub Docs
                <ActionList.LeadingVisual>
                  <BookIcon />
                </ActionList.LeadingVisual>
              </ActionList.LinkItem>
            </ActionList.Group>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>
  );
}

export default Navbar;
