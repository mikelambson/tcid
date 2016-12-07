import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';
import {RootComponent} from '../global/root';
import {ROUTING, routingProviders} from '../global/routes';
import {AboutsModule} from '../abouts/module';
import {ActivationModule} from '../activation/module';
import {ConfigModule} from '../config/module';
import {ContributeModule} from '../contribute/module';
import {ContactModule} from '../contact/module';
import {DocketsModule} from '../dockets/module';
import {Error404Component} from '../error/404';
import {ForgotUsernameModule} from '../forgot-username/module';
import {ForgotPasswordModule} from '../forgot-password/module';
import {HomeModule} from '../home/module';
import {ModalContainerComponent} from '../modal/container';
import {JudgesModule} from '../judges/module';
import {ProfileModule} from '../profile/module';
import {RegistrationModule} from '../registration/module';
import {ResourcesModule} from '../resources/module';
import {UsersModule} from '../users/module';
import {NavModule} from '../../components/global/nav/module';
import {DynamicFormModule} from '../../components/dynamic/module';
import {Interactive} from '../../services/interface/interactive';
import {Modal} from '../../services/modal/modal';
import {GoogleModule} from '../../services/google/module';
import {SocketModule} from '../../services/interface/module';

@NgModule({
	imports: [BrowserModule, ROUTING, DynamicFormModule, HttpModule, GoogleModule, NavModule, SocketModule, AboutsModule, ActivationModule, ConfigModule, ContributeModule, ContactModule, 
	DocketsModule, ForgotUsernameModule, ForgotPasswordModule, HomeModule, JudgesModule, ProfileModule, RegistrationModule, ResourcesModule, UsersModule], 
	declarations: [ModalContainerComponent, RootComponent, Error404Component, HeaderComponent, FooterComponent], 
	bootstrap: [RootComponent], 
	providers: [Modal, Interactive, routingProviders],
})
export class GlobalModule {}