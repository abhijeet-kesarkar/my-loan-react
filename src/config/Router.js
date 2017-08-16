
import {LoanCalculatorContainer, PersonalDetails, FinancialDetails, Identification, Summary} from './Components';

export const ROUTER_CONFIG = [
                {
                    path: '/mortgage',
                    title: 'Loan Calculator',
                    component: LoanCalculatorContainer
                },
                {
                    path: '/mortgage/calculator',
                    title: 'Loan Calculator',
                    component: LoanCalculatorContainer
                },
                {
                    path: '/mortgage/financial',
                    title: 'Financial Details',
                    component: FinancialDetails
                },
                {
                    path: '/mortgage/personal',
                    title: 'Personal Details',
                    component: PersonalDetails
                },
                {
                    path: '/mortgage/identity',
                    title: 'Identification',
                    component: Identification                    
                },
                {
                    path: '/mortgage/confirm',
                    title: 'Confirmation',
                    component: Summary
                },
                {
                    path: '/creditcard',
                    title: 'Select Card'
                },
                {
                    path: '/creditcard/select',
                    title: 'Select Card'
                },
                {
                    path: '/creditcard/personal',
                    title: 'Personal Details'
                },
                {
                    path: '/creditcard/confirm',
                    title: 'Confirmation'
                },
                {
                    path: '/sme',
                    title: 'Select SME Loan'
                },
                {
                    path: '/sme/select',
                    title: 'Select SME Loan'
                },
                {
                    path: '/sme/financial',
                    title: 'Financial Details'
                },
                {
                    path: '/sme/enterprise',
                    title: 'Enterprise Details'
                },
                {
                    path: '/sme/confirm',
                    title: 'Confirmation'
                }
            ];