package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IClasseDao;
import fr.adaming.model.Classe;

@Service
@Transactional
public class ClasseServiceImpl implements IClasseService {
	@Autowired
	private IClasseDao classeDao;

	@Override
	public Classe addClasse(Classe c) {
		System.out.println("Hello ?");
		if(c==null){
			System.out.println("Oh noes ! D:");
		}
		return classeDao.addClasse(c);
	}

	@Override
	public List<Classe> getAllClasses() {
		return classeDao.getAllClasses();
	}

	@Override
	public Classe getClasseById(int id) {
		return classeDao.getClasseById(id);
	}

	@Override
	public Classe updateClasse(Classe c) {
		return classeDao.updateClasse(c);
	}

	@Override
	public void deleteClasse(Classe c) {
		classeDao.deleteClasse(c);
		
	}
	
	
	
}
