import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import cloud_icon from './cloud-icon.svg';
import devops_icon from './devops-icon.svg';
import iac_icon from './iac-icon.svg';
import fullstack_icon from './fullstack-icon.svg';
import python from './python.svg';
import terraform from './terraform.svg';
import azure from './azure.svg';
import github from './github.svg';
import linux from './linux.svg';
import docker from './docker.svg';
import react_icon from './react.svg';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    cloud_icon,
    devops_icon,
    iac_icon,
    fullstack_icon,
    python,
    terraform,
    azure,
    github,
    linux,
    docker,
    react_icon
};


export const workData = [    //work card
    {
        title: 'DPI Packet Engine',
        description: 'Networking',
        bgImage: '/packet-analyzer.png',
        link: 'https://github.com/DharmendraGupta2024/Packet_analyzer-main',
    },
    {
        title: 'Smart Agriculture',
        description: 'IoT & Edge ML',
        bgImage: '/smart-agriculture.png',
        link: 'https://github.com/DharmendraGupta2024/Smart-Agriculture-System',
    },
    {
        title: 'Crop Recommendation',
        description: 'Machine Learning',
        bgImage: '/crop-recommendation.png',
        link: 'https://github.com/DharmendraGupta2024/Crop-Recommendation-App',
    },
    {
        title: 'Travel app',
        description: 'Fullstack',
        bgImage: '/travel-app.png',
        link: 'https://github.com/DharmendraGupta2024/travel_app',
    },
]


export const serviceData = [
    { icon: assets.cloud_icon, title: 'Cloud Infrastructure', description: 'Designing and managing cloud resources, virtual machines, networking, and scalable infrastructure on modern cloud platforms.', link: '' },
    { icon: assets.devops_icon, title: 'DevOps & CI/CD', description: 'Building automated CI/CD pipelines to streamline development, testing, and deployment workflows.', link: '' },
    { icon: assets.iac_icon, title: 'Infrastructure as Code', description: 'Provisioning and managing infrastructure using Terraform and automation tools for consistent deployments.', link: '' },
    { icon: assets.fullstack_icon, title: 'Full-Stack Development', description: 'Developing responsive web applications using React, JavaScript, and modern backend technologies.', link: '' },
]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technical Skills', description: 'Python, Terraform, Microsoft Azure, Git, GitHub, Linux, Docker, React.js, CSS3, HTML5' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];


export const toolsData = [
    assets.python,
    assets.git,
    assets.github,
    assets.linux,
    assets.react_icon,
    assets.mongodb,
    assets.docker,
    assets.azure,
    assets.terraform
];