import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero.section/heroSection.component';
import { MissionSectionComponent } from './mission.section/mission.section.component';
import { FeaturesSectionComponent } from './features.section/features.section.component';
import { CallToActionComponent } from './CallToAction.section/CallToAction.section.component';
import { TeamSectionComponent } from './team.section/team.sectioncomponent';

@Component({
  selector: 'app-about',
  imports: [CommonModule , HeroSectionComponent , MissionSectionComponent , FeaturesSectionComponent , CallToActionComponent, TeamSectionComponent],
  templateUrl: './About.component.html',
  styleUrl: './About.component.css',
})
export class AboutComponent {}
