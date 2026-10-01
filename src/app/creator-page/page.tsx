"use client";

import { CreatorCtaSection } from "@/components/creators/CreatorCtaSection";
import { CreatorProfilePage } from "@/components/creators/CreatorProfilePage";

const CreatorPage = () => {
  return (
    <div>
      <CreatorProfilePage
        onNavigate={() => {}}
        onSelectCourse={() => {}}
        currentUser={null}
        onSignOut={() => {}}
      />
      <CreatorCtaSection onJoinAsCreator={() => {}} />
    </div>
  );
};

export default CreatorPage;
