import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { WhatSection } from '@/components/what-section'
import { SkillsSection } from '@/components/skills-section'
import { PathSection } from '@/components/path-section'
import { CompetitionsSection } from '@/components/competitions-section'
import { AchievementsSection } from '@/components/achievements-section'
import { DepartmentsSection } from '@/components/departments-section'
import { JoinSection } from '@/components/join-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WhatSection />
        <SkillsSection />
        <PathSection />
        <CompetitionsSection />
        <AchievementsSection />
        <DepartmentsSection />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  )
}
