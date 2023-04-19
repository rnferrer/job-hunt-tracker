import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, Route } from 'react-router-dom';
import App from '../App';

export interface Application {
  id: number;
  position: string;
  appDate: string;
  mostRecentContact: string;
  company: string;
  status: string;
  details: string;
}

export interface Status {
  total: number;
  notStarted: number;
  inProgress: number;
}